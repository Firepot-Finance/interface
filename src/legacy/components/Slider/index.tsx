import React, { useCallback } from 'react';
import styled from 'styled-components';

const StyledRangeInput = styled.input<{ size: number }>`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    background-color: #222426;
    border-radius: 100%;
    border: none;
    transform: translateY(-40%);
    color: ${({ theme }) => theme.bg1};
  }

  &::-moz-range-thumb {
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    background-color: #222426;
    border-radius: 100%;
    border: none;
    color: ${({ theme }) => theme.bg1};
  }

  &::-ms-thumb {
    height: ${({ size }) => size}px;
    width: ${({ size }) => size}px;
    background-color: #222426;
    border-radius: 100%;
    color: ${({ theme }) => theme.bg1};
  }

  &::-webkit-slider-runnable-track {
    background: #222426;
    height: 3px;
  }

  &::-moz-range-track {
    background: #222426;
    height: 3px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({ theme }) => theme.bg5};
    height: 3px;
  }
  &::-ms-fill-lower {
    background: ${({ theme }) => theme.bg5};
  }
  &::-ms-fill-upper {
    background: ${({ theme }) => theme.bg3};
  }
`;

interface InputSliderProps {
  value: number;
  onChange: (value: number) => void;
  step?: number;
  min?: number;
  max?: number;
  size?: number;
}

export default function Slider({ value, onChange, min = 0, step = 1, max = 100, size = 16 }: InputSliderProps) {
  const changeCallback = useCallback(
    (e) => {
      onChange(parseInt(e.target.value));
    },
    [onChange]
  );

  return (
    <StyledRangeInput
      size={size}
      type="range"
      value={value}
      style={{ width: '100%', padding: '15px 0' }}
      onChange={changeCallback}
      aria-labelledby="input slider"
      step={step}
      min={min}
      max={max}
    />
  );
}
