/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import WishListCart from ".";
import { ItemProps } from "../ProductItem";
 
const mockData : ItemProps[] = [
    {
        "id": 1,
        "name": "Super Product 1",
        "description": "Some text for this super product that all want to buy...",
        "info": [
            "Info1 Info1 Info1 Info1 Info1 Info1",
            "Info2",
            "Info3",
            "Info4",
            "Info5",
            "Info6"
        ],
        "price": 120,
        "discount": 569
    },
    {
        "id": 4,
        "name": "Super Product 726",
        "description": "Some text for this super product that all want to buy...",
        "info": [
            "Info1",
            "Info2",
            "Info3"
        ],
        "price": 69
    },
    {
        "id": 6,
        "name": "Super Product 99",
        "description": "Some text for this super product that all want to buy...",
        "info": [
            "Info1",
            "Info2",
            "Info3"
        ],
        "price": 2269
    }
];
 
describe("Product Item", () => {
    afterEach(() => jest.clearAllMocks());
 
    it("The list and total price is correct'", () => {
        const mockTotalPrice = mockData.map(item => item.discount ?? item.price).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        const mockHandleDelete = jest.fn();
        render(
            <WishListCart wishList={mockData} handleDelete={mockHandleDelete} />,
        );
        const wishListItem = screen.queryAllByTestId("wishlist-item");
        expect(wishListItem).toHaveLength(mockData.length);

        const totalPrice = screen.getByTestId("wishlist-total-price");
        expect(totalPrice).toHaveTextContent(`Total Price: ${mockTotalPrice} :-`);
    });

    it("Remove item when clicking 'delete'", () => {
        const mockHandleDelete = jest.fn();
        render(
            <WishListCart wishList={mockData} handleDelete={mockHandleDelete} />,
        );
        for (let i=0; i<mockData.length; i++) {
            const deleteButton = screen.getByTestId("wishList-delete-button-0");
            fireEvent.click(deleteButton);
            expect(mockHandleDelete).toHaveBeenCalledTimes(i + 1);
        }
    });
});