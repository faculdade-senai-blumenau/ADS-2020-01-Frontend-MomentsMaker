import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'forms',
    title: 'Eventos',
    type: 'group',
    icon: 'feather icon-layout',
    children: [
      {
        id: 'forms-element',
        title: 'Novo cliente',
        type: 'item',
        url: '/dashboard/cliente',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'forms-element',
        title: 'Novo Fornecedor',
        type: 'item',
        url: '/dashboard/fornecedor',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'forms-element',
        title: 'Clientes',
        type: 'item',
        url: '/dashboard/clientes',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'forms-element',
        title: 'Fornecedores',
        type: 'item',
        url: '/dashboard/fornecedores',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'forms-element',
        title: 'Novo Evento',
        type: 'item',
        url: '/dashboard/categoria',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
