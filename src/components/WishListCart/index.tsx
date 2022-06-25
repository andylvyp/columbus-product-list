import React from "react";
import { ItemProps } from "../ProductItem";
import DeleteIcon from "@material-ui/icons/Delete";
import "./styles.scss";

interface wishListProps {
    wishList: ItemProps[];
    handleDelete: (item: ItemProps) => void;
}

export default function WishListCart({wishList, handleDelete} : wishListProps) {
    const totalPrice = wishList.map(item => item.discount ?? item.price).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    return(
        <div className="wishlist-container">
            <div className="wishlist-title">
                Wishlist
            </div>
            <ul className="wishlist-item-list">
                {wishList.map((item, index) =>
                    <li className="wishlist-item" key={`wishList-item-${index}`} data-testid="wishlist-item">
                        <div style={{ lineHeight: "20px", paddingRight: "10px" }}>{item.name}</div>
                        <DeleteIcon style={{cursor: "pointer", width: "20px", height: "20px", color: "#565555" }} onClick={() => handleDelete(item)} data-testid={`wishList-delete-button-${index}`} />
                    </li>
                )}
            </ul>

            <div className="wishlist-total-price" data-testid="wishlist-total-price">
                {`Total Price: ${totalPrice} :-`}
            </div>
        </div>

    );
}