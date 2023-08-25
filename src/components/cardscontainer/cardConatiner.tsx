import { useEffect, useState } from "react";
import { ICoupon } from "../dto/ICoupon";
import axios from "axios";
import { CouponCard } from "../cards/couponCard";
import './CardContainer.css';
import { useSelector } from "react-redux";
import { AppState } from "../../redux/AppState";
import { useDispatch } from "react-redux";
import { ActionType } from "../../redux/ActionType";
import { debug } from "console";


export function CardContainer() {
   let couponCardModel= useSelector((state: AppState) => state.coupons);
   let [couponCardViewModel, setCouponCardViewModel] = useState<ICoupon[]>([]);
   let searchInput = useSelector((state: AppState) => state.query);
   let dispatch = useDispatch();
   useEffect(() => { getCoupons() }, []);

   async function getCoupons() {
      try {
         let response = await axios.get("http://localhost:8080/coupons");
         couponCardModel = response.data;
         setCouponCardViewModel(couponCardModel);
         dispatch({ type: ActionType.GETALLCOUPONS, couponCardModel });
      }
      catch (error: any) {
         alert(error.message);
      }
   }

   function deleteCoupon(couponIdToDelete: number) {
      couponCardViewModel = couponCardViewModel.filter((coupon) => coupon.id !== couponIdToDelete);
      setCouponCardViewModel(couponCardViewModel);
   }

   function unhideCoupons() {
      couponCardViewModel = couponCardModel;
      setCouponCardViewModel(couponCardViewModel);
   }



   function isSearchedCoupon(coupon: ICoupon): boolean {
      if (searchInput === "") {
         return true;
      }

      return coupon.couponName.toLowerCase().includes(searchInput.toLowerCase());
   }

   return (
      <div className="cardContainer">
         <br />
         <div className="cards">
            {couponCardViewModel.filter(isSearchedCoupon).map((coupon) => <CouponCard key={coupon.id} coupon={coupon}
               deleteCoupon={deleteCoupon} />)}
            <br />
         </div>
         <button id='unhide' onClick={unhideCoupons} >Unhide Coupons</button><br />

      </div>
   );

} 
