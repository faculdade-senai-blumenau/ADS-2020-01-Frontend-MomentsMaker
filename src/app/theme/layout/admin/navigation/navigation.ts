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
        title: 'Clientes',
        type: 'item',
        url: '/dashboard/clientes',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      }

    ]
  },
  {
    id: 'avaliacao',
    title: 'Avaliações',
    type: 'group',
    icon: 'feather icon-pie-chart',
    children: [
      {
        id: 'charts',
        title: 'Minhas Avaliações',
        type: 'item',
        url: '/charts/apex',
        classes: 'nav-item',
        icon: 'feather icon-heart'
      }
    ]
  },
  {
    id: 'configuracao',
    title: 'Configurações',
    type: 'group',
    icon: 'feather icon-edit',
    children: [
      {
        id: 'charts',
        title: 'Personalizar Perfil',
        type: 'item',
        url: '/charts/apex',
        classes: 'nav-item',
        icon: 'feather icon-edit'
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
