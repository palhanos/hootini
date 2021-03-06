import React from 'react';
import styled from 'react-emotion';

const StyledSVG = styled('svg')({
  display: 'inline-block',
  width: '1em',
  height: '1em',
  strokeWidth: 0,
  stroke: 'currentColor',
  fill: 'currentColor'
});

const SVGContainer = styled('span')({
  display: 'flex'
});

function ArrowIcon({ direction = 'up' }, ...containerProps) {
  const rotation = {
    up: 360,
    right: 90,
    down: 180,
    left: 270
  }[direction];
  return (
    <SVGContainer {...containerProps}>
      <StyledSVG
        viewBox="0 0 24 24"
        transform={rotation ? `rotate(${rotation})` : null}
      >
        <path d="M6.984 14.016l5.016-5.016 5.016 5.016h-10.031z" />
      </StyledSVG>
    </SVGContainer>
  );
}

function BrandIcon(props) {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 24 33">
        <path d="M23.8331 18.2059C23.1386 18.574 22.5115 19.0356 21.9613 19.5702C20.3826 21.1043 19.4484 23.2475 19.4484 25.571C19.4484 27.5635 20.1559 29.4525 21.3823 30.9298C22.0119 31.6881 22.7754 32.3396 23.6559 32.8372C23.7353 32.8819 23.8032 32.9387 23.8656 33H23.9999V18.3089C23.9999 18.2231 23.9082 18.1659 23.8331 18.2059Z" />
        <path d="M18.0539 32.9996H20.0752C20.2311 32.9996 20.3076 32.8112 20.2004 32.6957C19.6986 32.1548 19.2564 31.5619 18.8806 30.928C17.9384 29.3367 17.4113 27.4924 17.4113 25.571C17.4113 22.0328 19.1477 18.8318 21.96 16.9325C22.5376 16.5438 22.7426 16.3884 23.4069 16.117C23.4361 16.1038 23.5737 15.9524 23.7094 15.805C23.8957 15.6026 23.9996 15.3368 23.9996 15.0599V10.6332C23.9996 4.76075 19.3123 0 13.5305 0H10.4692C4.68729 0 0 4.76075 0 10.6332V14.6628C0 24.7901 8.08291 32.9996 18.0539 32.9996ZM2.8375 9.68356C2.94941 7.58258 4.65697 5.8226 6.72192 5.67594C8.97821 5.52194 10.9421 7.17559 11.1876 9.4489C11.2345 9.87056 11.5847 10.1859 11.9998 10.1859C12.415 10.1859 12.7652 9.87056 12.8121 9.4489C13.0576 7.17192 15.025 5.51461 17.2777 5.67594C19.3318 5.8226 20.9997 7.50558 21.1549 9.59189C21.321 11.8395 19.7326 13.8378 17.5413 14.1385C17.4799 14.1458 17.4221 14.1605 17.3644 14.1825H14.6352C13.877 14.1825 13.1659 14.4832 12.628 15.0258L11.9998 15.6638L11.3717 15.0258C10.8338 14.4832 10.1226 14.1825 9.36448 14.1825H6.8952C6.86271 14.1752 6.82661 14.1715 6.79051 14.1678C4.4873 14.0395 2.71476 12.0265 2.8375 9.68356Z" />
        <path d="M7.10348 11.68C8.0585 11.68 8.8327 10.8937 8.8327 9.92373C8.8327 8.95375 8.0585 8.16742 7.10348 8.16742C6.14846 8.16742 5.37427 8.95375 5.37427 9.92373C5.37427 10.8937 6.14846 11.68 7.10348 11.68Z" />
        <path d="M16.8957 11.68C17.8507 11.68 18.6249 10.8937 18.6249 9.92373C18.6249 8.95375 17.8507 8.16742 16.8957 8.16742C15.9407 8.16742 15.1665 8.95375 15.1665 9.92373C15.1665 10.8937 15.9407 11.68 16.8957 11.68Z" />
      </StyledSVG>
    </SVGContainer>
  );
}

function ChevronIcon({ direction = 'up' }, ...containerProps) {
  const rotation = {
    up: 360,
    right: 90,
    down: 180,
    left: 270
  }[direction];
  return (
    <SVGContainer {...containerProps}>
      <StyledSVG
        viewBox="0 0 20 20"
        transform={rotation ? `rotate(${rotation})` : null}
      >
        <path d="M10.707 7.050l-0.707-0.707-5.657 5.657 1.414 1.414 4.243-4.242 4.243 4.242 1.414-1.414z" />
      </StyledSVG>
    </SVGContainer>
  );
}

function DragHandleIcon(props) {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 24 24">
        <path d="M3.984 15v-2.016h16.031v2.016h-16.031zM20.016 9v2.016h-16.031v-2.016h16.031z" />
      </StyledSVG>
    </SVGContainer>
  );
}

function EditIcon(props) {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 24 24">
        <path d="M20.719 7.031l-1.828 1.828-3.75-3.75 1.828-1.828c0.375-0.375 1.031-0.375 1.406 0l2.344 2.344c0.375 0.375 0.375 1.031 0 1.406zM3 17.25l11.063-11.063 3.75 3.75-11.063 11.063h-3.75v-3.75z" />
      </StyledSVG>
    </SVGContainer>
  );
}

function OptionsIcon(props) {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 24 24">
        <path d="M12 15.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM12 9.984c1.078 0 2.016 0.938 2.016 2.016s-0.938 2.016-2.016 2.016-2.016-0.938-2.016-2.016 0.938-2.016 2.016-2.016zM12 8.016c-1.078 0-2.016-0.938-2.016-2.016s0.938-2.016 2.016-2.016 2.016 0.938 2.016 2.016-0.938 2.016-2.016 2.016z" />
      </StyledSVG>
    </SVGContainer>
  );
}

function PlusIcon(props) {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 24 24">
        <path d="M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z" />
      </StyledSVG>
    </SVGContainer>
  );
}

function RemoveCircleIcon(props) {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 24 24">
        <path d="M17.016 12.984v-1.969h-10.031v1.969h10.031zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z" />
      </StyledSVG>
    </SVGContainer>
  );
}

function TrashIcon(props) {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 24 24">
        <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12c0 1.078-0.938 2.016-2.016 2.016h-7.969c-1.078 0-2.016-0.938-2.016-2.016z" />
      </StyledSVG>
    </SVGContainer>
  );
}

function XIcon(props) {
  return (
    <SVGContainer {...props}>
      <StyledSVG viewBox="0 0 24 24">
        <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z" />
      </StyledSVG>
    </SVGContainer>
  );
}

export {
  ArrowIcon,
  BrandIcon,
  ChevronIcon,
  DragHandleIcon,
  EditIcon,
  OptionsIcon,
  PlusIcon,
  RemoveCircleIcon,
  TrashIcon,
  XIcon
};
