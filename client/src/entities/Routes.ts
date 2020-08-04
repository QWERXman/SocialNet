export interface RoutesEntity {
    id: number,
    text: string,
    icon: 'newspaper outline'
        | 'address card outline'
        | 'envelope outline'
        | 'address book outline',
    component: any,
    path: string
}
