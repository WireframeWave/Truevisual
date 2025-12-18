import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface StatCardProps {
  value: string;
  label: string;
  bgColor?: string;
  textColor?: string;
}

export interface FeatureTab {
  id: string;
  label: string;
  icon: LucideIcon;
  content: React.ReactNode;
}