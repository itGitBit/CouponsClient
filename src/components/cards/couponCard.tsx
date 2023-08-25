import { useState } from "react";
import Coupon, { ICoupon } from "../dto/ICoupon";
import "./CouponCard.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/AppState";
import { useEffect } from "react";
import jwt_decode from 'jwt-decode';
import { useDispatch } from "react-redux";
import { ActionType } from "../../redux/ActionType";
import { useNavigate } from "react-router-dom";


interface ICouponCardProps {
    coupon: ICoupon;
    deleteCoupon: Function;
}


export function CouponCard(props: ICouponCardProps) {
    //todo check this:
    let [userType,setUserType] = useState('');
    let isLoggedIn = useSelector((state: AppState) => state.isLoggedIn);
    //

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onChangeComponent = (path: string) => navigate(path);

    //check if not to delete:
    useEffect(() => { if (isLoggedIn = true) { 
        convertToken();
    }}, [isLoggedIn]);
    
    function convertToken() {
        let token = localStorage.getItem('token');
        if (!token) {
            return;
        }
        let tokenInfo: any = jwt_decode(token);
        let parsedSub = JSON.parse(tokenInfo.sub);
        setUserType(parsedSub.userType);
    }
    //




    function reverseString(stringToReverse: string) {
        return stringToReverse.split('-').reverse().join('-')
    }

    function showDateCorrectly(date: string) {
        return reverseString
        (date.toString().split("T")[0])
    }
    async function onPurchase() {
        let purchase = { couponId: props.coupon.id, amountOfProducts: 1 };
        debugger;
        try {
            const response = await axios.post("http://localhost:8080/purchases", purchase);
            const serverResponse = response.data;
            console.log(serverResponse);
            alert("Coupon purchased successfully!");
        }
        catch (error: any) {
            alert(error.message);
        }
    }
    return (
        <div className="couponCard">
            <div className="CouponDetails">
                <div className="CouponName"><label>Coupon Name: </label>{props.coupon.couponName}</div><br />
                <div className="CouponDescription"><label>Coupon Description: </label>{props.coupon.couponDescription}</div><br />
                <div className="CouponPrice"><label>Coupon Price: </label>{props.coupon.couponPrice} $</div><br />
                <img className="CouponPicture" src={props.coupon.pictureUrl} alt="coupon picture" /><br />
                <div className="AmountOfCouponsLeft"><label>Amount Left: </label>{props.coupon.amountOfCouponsLeft}</div><br />
                <div className="StartDate"><label>Start Date: </label>{showDateCorrectly(props.coupon.startDate)}</div><br />
                <div className="EndDate"><label>End Date: </label>{showDateCorrectly(props.coupon.endDate)}</div><br />
                <div className="CategoryName"><label>Category: </label>{props.coupon.categoryName}</div><br />
                <div className="CompanyName"><label>Company: </label>{props.coupon.companyName}</div><br />
            </div>
            <div className="button-box">
                {isLoggedIn && <button onClick={onPurchase}>Purchase now</button>}
            </div>


        </div>
    );
}