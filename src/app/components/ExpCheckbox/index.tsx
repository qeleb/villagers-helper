import React, { memo } from 'react'
import styled from 'styled-components/macro'
import { mediaMin } from 'styles/media'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

interface Props extends InputProps {
  id: string
  img?: string
  label: string
  className?: string
  isSelected?: boolean
}

export const ExpCheckbox = memo(
  ({ id, img, label, className, isSelected, ...restOf }: Props) => (
    <Wrapper className={className}>
      <input type="checkbox" id={id} checked={isSelected} {...restOf} />
      <label htmlFor={id}>
        {label}
        {img && <img src={img} alt={label} />}
      </label>
    </Wrapper>
  )
)

const Wrapper = styled.div`
  input[type='checkbox'] {
    margin: 0;
    opacity: 0;
    width: 0;
    height: 0;
    padding: 0;

    + label {
      width: 100%;
      margin: 0;
      display: inline-block;
      padding-left: 1.375rem;
      padding-top: 0.0625rem;
      position: relative;
      z-index: 1;
      font-size: 0.875rem;
      color: ${p => p.theme.text};
      cursor: pointer;

      a {
        color: ${p => p.theme.text};
        text-decoration: none;
      }

      img {
        width: 1.5rem;
        float: right;
      }

      &::before {
        position: absolute;
        top: 0.25rem;
        left: 0;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 30%;
        background-color: ${p => p.theme.background};
        content: '';
        border: 2px solid ${p => p.theme.border};
        transition: all 0.1s;
      }

      &::after {
        display: none;
        content: '';
        position: absolute;
        display: inline-block;
        width: 0.375rem;
        height: 0.375rem;
        border-radius: 30%;
        top: 0.5625rem;
        left: 0.3125rem;
        background-color: ${p => p.theme.background};
      }

      ${mediaMin.medium`
      &:hover {
        &::before {
          border-color: ${p => p.theme.primary};
        }
      }
      `}
    }

    &:disabled {
      + label {
        opacity: 0.6;
        cursor: auto;

        &:hover {
          &::before {
            border-color: ${p => p.theme.border};
          }
        }
      }
    }

    &:focus {
      + label {
        &::before {
          box-shadow: 0 0 0 3px
            ${p =>
              p.theme.primary.replace(
                /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
                'rgba$1,0.2)'
              )};
        }
      }
    }

    &:checked {
      + label {
        &::before {
          background-color: ${p => p.theme.primary};
          border-color: ${p => p.theme.primary};
        }

        &::after {
          display: inline-block;
        }
      }
    }
  }
`
