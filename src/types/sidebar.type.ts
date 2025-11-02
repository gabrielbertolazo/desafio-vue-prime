import type { Component } from "vue";

export interface SidebarItems {
    label: string;
    icon?: string;
    route?: string;
    action?: Function
    isComponent?: boolean;
    component?: Component
    props?: Record<string, any>;
}