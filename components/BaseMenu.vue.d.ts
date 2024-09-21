import { IMenuItem } from '../types/components';
export interface IBaseMenu {
    items: IMenuItem[];
}
declare function toggle(event: Event): void;
declare const _default: import('vue').DefineComponent<IBaseMenu, {
    toggle: typeof toggle;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IBaseMenu> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
