import Icon from "@ant-design/icons/lib";

export interface RoutesEntity {
    id: number,
    text: string,
    icon: typeof Icon,
    component: any,
    path: string
}
