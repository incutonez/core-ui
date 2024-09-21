import { IBaseMenu } from './BaseMenu.vue';
import { IBaseButton } from '../types/components';
export interface ITableCellMenu {
    buttonConfig?: IBaseButton;
    menuConfig: IBaseMenu;
}
declare const _default: import('vue').DefineComponent<ITableCellMenu, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ITableCellMenu> & Readonly<{}>, {
    buttonConfig: IBaseButton;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
