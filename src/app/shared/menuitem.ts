export interface MenuItem {
  id?: number;
  label?: string;
  parentId?: number;
  icon?: string;
  active?: boolean;
  collapsed?: boolean;
  disabled?: boolean;
  visible?: boolean;
  route?: string;
  url?: string;
  target?: string;
  style?: any;
  styleClass?: string;
  items?: MenuItem[];
}
