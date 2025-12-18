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
  content?: string[]; // For standard bullet points
  footerNote?: string;
  data?: any; // For charts, tables, or complex grid data
  visual?: ReactNode; // Icon name or specific visual instruction identifier
  logo?: ReactNode; // Optional logo component for the header
  highlight?: boolean;
}

export interface PresentationState {
  currentSlideIndex: number;
}