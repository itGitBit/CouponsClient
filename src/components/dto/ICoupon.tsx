export interface ICoupon {
    id: number;
    couponName: string;
    couponDescription: string;
    couponPrice: number;
    amountOfCouponsLeft: number;
    startDate: string;
    endDate: string;
    companyId: number;
    categoryId: number;
    categoryName: string;
    companyName: string;
    pictureUrl: string;
}
export default ICoupon;

