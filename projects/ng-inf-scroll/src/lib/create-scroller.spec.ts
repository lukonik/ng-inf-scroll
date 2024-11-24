import { TestBed } from '@angular/core/testing';
import { CreateScroller, ScrollerOptions } from './create-scroller';
import {
  INF_SCROLLER_OPTIONS,
  provideInfScroller,
} from './provide-inf-scroller';
import { NgZone } from '@angular/core';
import { Scroller } from './scroller';

describe('CreateScroller', () => {
  let service: CreateScroller;
  describe('getOptionValue', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({ providers: [CreateScroller] });
      service = TestBed.inject(CreateScroller);
    });

    function correctlyReturnsDefinedOptionValue(
      chosedOptions: ScrollerOptions,
      key: keyof ScrollerOptions
    ) {
      it(`correctly returns ${key} when it is defined`, () => {
        const value = service.getOptionValue(chosedOptions, key);
        expect(value).toBe(chosedOptions[key]);
      });
    }

    function correctlyReturnsDefaultOptionValue(
      chosedOptions: ScrollerOptions,
      key: keyof ScrollerOptions,
      expectedValue: any
    ) {
      it(`correctly returns ${key} when it is defined`, () => {
        const value = service.getOptionValue(chosedOptions, key);
        expect(value).toBe(expectedValue);
      });
    }

    const choseOption: ScrollerOptions = {
      autoStop: true,
      offsetPercentage: 30,
      orientation: 'y',
    };
    correctlyReturnsDefinedOptionValue(choseOption, 'autoStop');
    correctlyReturnsDefinedOptionValue(choseOption, 'offsetPercentage');
    correctlyReturnsDefinedOptionValue(choseOption, 'orientation');

    const defaultOption: ScrollerOptions = {
      autoStop: undefined,
      offsetPercentage: undefined,
      orientation: undefined,
    };
    correctlyReturnsDefaultOptionValue(defaultOption, 'autoStop', true);
    correctlyReturnsDefaultOptionValue(defaultOption, 'offsetPercentage', 20);
    correctlyReturnsDefaultOptionValue(defaultOption, 'orientation', 'y');
  });
  describe('getOptionValueWithProvider', () => {
    let service: CreateScroller;

    function correctlyReturnsProvidedOptionValue(
      chosedOptions: ScrollerOptions,
      key: keyof ScrollerOptions,
      expectedValue: any
    ) {
      it(`correctly returns ${key} when it is defined`, () => {
        const value = service.getOptionValue(chosedOptions, key);
        expect(value).toBe(expectedValue);
      });
    }
    const providedScroller = {
      autoStop: false,
      offsetPercentage: 90,
      orientation: 'x',
    } as ScrollerOptions;
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [CreateScroller, provideInfScroller(providedScroller)],
      });
      service = TestBed.inject(CreateScroller);
    });
    correctlyReturnsProvidedOptionValue(providedScroller, 'autoStop', false);
    correctlyReturnsProvidedOptionValue(
      providedScroller,
      'offsetPercentage',
      90
    );
    correctlyReturnsProvidedOptionValue(providedScroller, 'orientation', 'x');
  });


  describe('create', () => {
    TestBed.configureTestingModule({
      providers: [CreateScroller],
    });
    it('created scroller with correct options', () => {
      const service = TestBed.inject(CreateScroller);
      const scrollElement = document.createElement('div');
      const checkToElement = document.createElement('div');
      const scroller = service.create(
        {
          scrollElement,
          checkingTo: checkToElement,
          offsetPercentage: 20,
          autoStop: true,
        },
        TestBed.inject(NgZone)
      );

      expect(scroller).toBeInstanceOf(Scroller);
    });
  });
});
