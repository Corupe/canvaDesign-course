export type ElementType = 'h1' | 'h2' | 'h3' | 'p' | 'blockquote' | 'ul' | 'ol' | 'table';

export interface BaseElement {
  type: ElementType;
}

export interface TextElement extends BaseElement {
  type: 'h1' | 'h2' | 'h3' | 'p' | 'blockquote';
  text: string;
}

export interface ListElement extends BaseElement {
  type: 'ul' | 'ol';
  items: string[];
}

export interface TableElement extends BaseElement {
  type: 'table';
  text: string; // Storing table as markdown is easiest for now
}

export type SlideElement = TextElement | ListElement | TableElement;

export interface SlideSection {
  elements: SlideElement[];
}

export interface Slide {
  id: string;
  images: string[];
  sections: SlideSection[];
}

export interface CourseDay {
  title: string;
  slides: Slide[];
}
