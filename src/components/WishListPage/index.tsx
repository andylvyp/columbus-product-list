import React, { useState } from "react";
import data from "../../data/product-list.json";
import ProductItem, { ItemProps } from "../ProductItem";
import WishListCart from "../WishListCart";
import "./styles.scss";

export default function WishListPage() {
    const [wishList, setWishList] = useState<ItemProps[]>([]);
    const handleOnclick = (item: ItemProps) => {
        const isDuplicatedItem = !!wishList.find(element => element.id === item.id);
        if (!isDuplicatedItem) {
            const wishListTemp = wishList.concat(item);
            setWishList(wishListTemp);
        }
    };

    const handleDelete = (item: ItemProps) => {
        setWishList([...wishList].filter((wishListItem) => wishListItem.id !== item.id));
    };

    return (
        <div className="wishList-page-container">
            <div className="wishList-page-title">
                Super product list
            </div>

            <div className="wishList-grid">
                {data.productList.map((item, index) =>
                    <ProductItem item={item} updateList={handleOnclick} key={`product-item-${index}`} />
                )}
            </div>
            <WishListCart wishList={wishList} handleDelete={handleDelete} />
        </div>
    );
}