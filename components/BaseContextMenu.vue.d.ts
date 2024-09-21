import { IMenuItem } from '../types/components';
interface IProps {
    items: IMenuItem[];
}
declare function show(event: MouseEvent): void;
declare function hide(): void;
declare const _default: import('vue').DefineComponent<IProps, {
    show: typeof show;
    hide: typeof hide;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
