import { ReactNode } from 'react';

export type SlideType = 
  | 'cover' 
  | 'intro'
  | 'section' 
  | 'content-list' 
  | 'content-split' 
  | 'diagram-flow'
  | 'grid-cards'
  | 'table'
  | 'chart-bar'
  | 'chart-donut'
  | 'pricing-cards'
  | 'timeline'
  | 'contact'
  | 'roi-split'
  | 'comparison';

export interface SlideData {
  id: string;
  type: SlideType;
  title?: string;
  subtitle?: string;
  content?: string[];
  footerNote?: string;
  data?: any;
  visual?: ReactNode;
  logo?: ReactNode;
  highlight?: boolean;
}

export interface PresentationState {
  currentSlideIndex: number;
}
