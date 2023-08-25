export interface IPurchase {
    id: number;
    userId: number;
    couponId: string;
    amountOfProducts: number;
    dateOfPurchase: string;
    companyId: number;

}

export function Purchase(props: IPurchase) {
    return (
        <div className="coupon">
            {props.id}
            {props.userId}
            {props.couponId}
            {props.amountOfProducts}
            {props.dateOfPurchase}
            {props.companyId}
        </div>
    );
}

export default IPurchase;
