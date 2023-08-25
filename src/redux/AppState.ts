import ICoupon from "../components/dto/ICoupon";

export class AppState {
    public query: string = '';
    public isLoggedIn: boolean = false;
    public coupons: ICoupon[] = [];
}