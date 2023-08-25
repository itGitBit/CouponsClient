import { useState } from "react";
import ICoupon from "../dto/ICoupon";
import axios from "axios";
import './AddCoupon.css';


export function AddCoupon() {
    let [couponName, setCouponName] = useState('');
    let [couponDescription, setCouponDescription] = useState('');
    let [couponPrice, setCouponPrice] = useState(0);
    let [amountOfCouponsLeft, setAmountOfCouponsLeft] = useState(0);
    let [startDate, setStartDate] = useState('');
    let [endDate, setEndDate] = useState('');
    let [companyId, setCompanyId] = useState(0);
    let [categoryId, setCategoryId] = useState(0);
    let [categoryName, setCategoryName] = useState('');
    let [companyName, setCompanyName] = useState('');
    let [pictureUrl, setPictureUrl] = useState('');


    async function addCoupon() {
        try {
            let coupon = { couponName, couponDescription, couponPrice, amountOfCouponsLeft, startDate, endDate, categoryName, companyName, pictureUrl };
            const response = await axios.post("http://localhost:8080/coupons", coupon);
            alert("Coupon added successfully!");
        } catch (error: any) {
            alert(error.message);
        }
    }

    async function addCategory() {
        try {
            let category = { categoryName };
            const response = await axios.post("http://localhost:8080/categories", category);
            alert("Category added successfully!");
        } catch (error: any) {
            alert(error.message);
        }
    }
    async function addCompany() {
        try {
            let company = { companyName };
            const response = await axios.post("http://localhost:8080/companies", company);
            alert("Company added successfully!");
        } catch (error: any) {
            alert(error);
        }
    }


    return (
        <div className="AddCoupon">
            <div className="mini-boxes">
                <div className="category-box">
                    <input  type="text" placeholder='categoryName' onChange={event => setCategoryName(event.target.value)} /><br />
                    <button id='submit' onClick={addCategory} >Add Category</button><br />
                </div>
                <div className="company-box">
                    <input type="text" placeholder='Company Name' onChange={event => setCompanyName(event.target.value)} /><br />
                    <button id='submit' onClick={addCompany} >Add Company</button><br />
                </div>
            </div>
            <div className="coupon-box">
                <input type="text" title="must be between 4 and 25 characters" placeholder='couponName' required onChange={event => setCouponName(event.target.value)} /><br />
                <label htmlFor="coupon-description" className="counter">{couponDescription.length}/200</label><br/>
                <input id="coupon-description" type="text" required className="couponDescription" title="must be between 2 and 200 characters" placeholder='couponDescription' onChange={event => setCouponDescription(event.target.value)} /><br />
                <input type="number" required title="must be positive and less than 10,000$" placeholder='couponPrice' onChange={event => setCouponPrice(parseInt(event.target.value))} /><br />
                <input type="number" required title="Free to choose" placeholder='amountOfCouponsLeft' onChange={event => setAmountOfCouponsLeft(parseInt(event.target.value))} /><br />
                <input type="date" required title="must be before end date" placeholder='startDate' onChange={event => setStartDate(event.target.value)} /><br />
                <input type="date" required title="must be after end date" placeholder='endDate' onChange={event => setEndDate(event.target.value)} /><br />
                {/* <input type="number" placeholder='companyId' onChange={event => setCompanyId(parseInt(event.target.value))} /><br /> */}
                {/* <input type="number" placeholder='categoryId' onChange={event => setCategoryId(parseInt(event.target.value))} /><br /> */}
                <input type="text" required placeholder='categoryName' onChange={event => setCategoryName(event.target.value)} /><br />
                <input type="text"  required placeholder='companyName' onChange={event => setCompanyName(event.target.value)} /><br />
                <input type="text" required placeholder='pictureUrl' onChange={event => setPictureUrl(event.target.value)} /><br />
                <button id='submit'  onClick={addCoupon} >Add Coupon</button><br />

            </div>
        </div>


    );
}
export default AddCoupon;

