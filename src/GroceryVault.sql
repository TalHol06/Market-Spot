DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
    product_id BIGSERIAL NOT NULL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL UNIQUE,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(6,2) NOT NULL
);

INSERT INTO products (
    product_name,
    category,
    price
)
VALUES
('White Bread','Baked',2.28),
('Wheat Bread','Baked',3.79),
('Plain Bagels','Baked',2.70),
('Mini Plain Bagels','Baked',4.97),
('Croissants','Baked',6.22),
('Sourdough Bread','Baked',4.15),
('Blueberry Muffins','Baked',4.66),
('Banana Nut Muffins','Baked',4.66),
('Chocolate Chip Muffins','Baked',4.66),
('Whole Milk','Dairy',  3.45),
('Oat Milk','Dairy',5.18),
('2% Milk','Dairy',3.89),
('Almond Milk','Dairy',5.18),
('Half & Half','Dairy',4.14),
('Whipped Cream','Dairy',3.11),
('Heavy Whipping Cream','Dairy',5.61),
('Cream Cheese','Dairy',2.39),
('Strawberries','Fruit',2.90),
('Grapes','Fruit',7.84),
('Blueberries','Fruit',6.74),
('Raspberries','Fruit',2.55),
('Blackberries','Fruit',4.74),
('Bananas',  'Fruit',1.87),
('Granny Smith Apples','Fruit',4.34),
('Oranges',  'Fruit',2.97),
('Corn','Vegetables',4.14),
('Onion','Vegetables',3.62),
('Potatoes','Vegetables',2.64),
('Broccoli','Vegetables',1.30),
('Carrots','Vegetables',2.04),
('Cucumbers','Vegetables',3.62),
('Tomatoes','Vegetables',3.41),
('Ground Beef','Meat',4.46),
('Ground Turkey','Meat',7.27),
('Chicken Breast','Meat',13.59),
('Whole Chicken','Meat',10.63),
('Chuck Roast','Meat',17.70),
('Pork Chops','Meat',7.13),
('Apple Juice','Beverages',3.10),
('Grape Juice','Beverages',3.89),
('Cranberry Juice','Beverages',3.56),
('Dr.Pepper Zero Sugar Soda','Beverages',7.57),
('Coca-Cola','Beverages',7.24),
('Coconut Water','Beverages',4.16),
('Natural Spring Water','Beverages',4.56),
('Farfalle Pasta','Pantry',1.91),
('Basmati Rice','Pantry',5.08),
('Jasmine Rice','Pantry',7.16),
('Sugar','Pantry',2.58),
('Flour','Pantry',6.22),
('Salt','Pantry',1.64),
('Pepper','Pantry',4.14),
('Vegetable Oil','Pantry',4.13),
('Vanilla Ice Cream','Frozen',7.26),
('Chocolate Ice Cream','Frozen',7.26), 
('Chicken Nuggets','Frozen',12.19),
('Waffles','Frozen',6.21),
('Tater Tots','Frozen',5.49),
('Pepperoni Pizza','Frozen',8.81),
('French Fries','Frozen',4.65);




ALTER TABLE products
ADD CONSTRAINT unique_product_name UNIQUE (product_name);

DROP TABLE IF EXISTS pictures CASCADE;

CREATE TABLE pictures(
    image_id BIGSERIAL NOT NULL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    image_to_use VARCHAR(500) NOT NULL,
    FOREIGN KEY(product_name) REFERENCES products(product_name)
);

INSERT INTO pictures(
	product_name,
	image_to_use
)

VALUES
('White Bread', 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2023-09/best-white-bread-Bimbo-Soft-White-Bread-mc-230906-966ddb.jpg'),
('Wheat Bread', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPLKMdUrtjj9D6nWzZv3H_7DV-gquInf_qA&s'),
('Plain Bagels', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgz3CzBzlXYEStVa7bVtsSFpeUUhnkrZSyA&s'),
('Mini Plain Bagels', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1G4rsjCB3Q7xKbhKppEK2fjPhpaZjMcWE6w&s'),
('Croissants', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKq3mhD6vffRRVdabp21dlJmwMTQzOGbNAJ2RkbWbPSSU2CFrhOZnWEHRi1rTOQrQhcTgpldhdzjoKYqrJp3U7zzMf2WnQ6OtR2dbSaILxRWYCbU6IeShUxA' ),
('Sourdough Bread', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRego2PtYdoBpxYJJ1VOUqqg0jXt6E1Umcny9r1atvYb_NgU4w_ruk_T59HO8UhCLQet0D8hvMZnE1M4a_VeFaw8QQbu2KODikTc1THOgkWG4JRMSAUeRuh' ),
('Blueberry Muffins','https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRd5BmV8m9pjMyeFwsit3ciOB9Cvq85Hi67Q1y34ZWxxM2Fvb632EtcZNu60i9qOn3HU7FCrUylIn_osbEq478wFRIrk7eq07IayxdUbpSJGF9CJb0EA98M'),
('Banana Nut Muffins','https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRsjNlWrB_dlWvqpr2do_pbc3sA6uFKuqJV8WzbwqLNnKAXN2rcBSCEJbVoEJ2UxFxD7kvEAb4TegXDW09Dfas-25k6Se4vdol7KsD1mwJ2dIql84sWGlJVhg'),
('Chocolate Chip Muffins', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTJ1FiNajm1A_CelSZq_TwVd0mbEaoBjZ0opvODXSjK5bmZ8K9QaQ6hyDzRZ1eMc5y0LE7sqvayuvWs-xbD7fKvu9yzztA8Eov3t7GHKjAbf2SR1XeJEiC0PA'),
('Whole Milk', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR2NF3opCidCk6P-stdPD29SFnu7v8ndZsAQ-9Ev_o0mxpAJFqTaQz3CuyHY3CJaq8ZA_SD9V5onCeorXtIjUzosQ9v3NFoN87lIbwuIKwlDSE_At-qcsSk2g'),
('Oat Milk','https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQDKxDXiI-tSg8SNPOAOaPvYsjoOIXpTLnvAs2hK6JdMG2CRd3jpy6D3Q5-N7m_lj5SE38oJdjIXTY-5x0NcbCDgwYxFsz02-rv25qcu8q84Lpjhh1fOKz6w'),
('2% Milk','https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTquxbahz51DF0IgfUeDEuPjE0seUNW_KiPypGIQDrvVoDSsNFV-_B_kFu6FsqCJ10181ZiYZL4pHkF02hh1WjsG_xpJgzwiY993DlbaWoTL1T5dirGEYjJGmQ'),
('Almond Milk','https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlftUU-2VjunJRjq3jgK9xLGEPoR5Mewlt0OFwHRVfvBPvJm5GJK_mgP66otl7H6680o4JQPSR5gXRIeWwAA3rPi_D72tMTmVRd1FSuP3H0dPPoM8juMd0'),
('Half & Half', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTdqTYgVUZpNC967nU9YD6au5QlJ97PTZq3QMaOMGNybkhmEO_zqwzRqVDF8KA65Oo3zdT9qAFiDAcAc4mBlGYIKHpyb-OMuvvvSIcxgO_2gmnPQNHjMFzS'),
('Whipped Cream', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfvv5oyte6Wh_Q6z8cZmZZkqf_99Oiu_Qz4t9esA7WrfO0DicgFw0X6Pxp1BnpD1Iv_pLpeGaK4UokNTSYrqiQzwg-GkcP8VIDy_RkA5UYQqBDOSZnULJq'),
('Heavy Whipping Cream', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3jzxnVq8wMjEv8pE90QCOZzNsDg_VISmLYIsKmzkqOkmwiBCb8lHMb38k-ajymb2ooMB_FEywq_MKViuzyOb0xXiczih1gYVts6KPFPKkQudaBwlwLtvv'),
('Cream Cheese', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwyftpGggbj-iOX9ySoYTd31WGc3CVxKqzGgOhafeFmxj9ZtW3tRKQhVoWSLE7UPcyeBkaJx4HON4z5TIeHjRMsVZ-AROSotPZw9uL_niFx0QqXDpTJEWcog'),
('Strawberries', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQvSfYM9REMHMeu59Z7mvTiJCwKIfq2BxjeCK1fLiXgoqCGXvN4TZ_f_aCnB6oJd5Z_ntj2b3vRcVAiWC4omStarlsLiafsLJOmAZabROJpRw9lFnrB1xTB' ),
('Grapes','https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgS1UnHPoCJoZWvhb401-o2B4Cu4dWVA0wD8BVsk2YMmctsZCLstYyljafYTXslSVaCct7ZaUWjWpNXO_qe4eg7f29iI4j8aOSrS8JJuo'),
('Blueberries', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTeyUhuqcGMgS9ki2Y3mFpwEJcGuA_BWZUxuZoeZxrmI92MKjnox3GWW5ydGqAbkIve0M1T45zp3HrSUsYA1Qs8KV6jKGXm2mufgP6Yebv_bsp3qeCQji6ZZW8'),
('Raspberries', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQEvgKByix0AYwXWoomfKvFCzx6VQJpRoQZ-EueL4_iJIdhkki25PyIklTc0KJpHmnPAMpDHMmdBtognH_GHv9HSYhWT2yD-iN68qfcL00EEYXUpsRAVumQP8s'),
('Blackberries', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3tL_W2NYXhKtdbKSkgeriOmkZJZtiUjXbfli3UyM2VEVZANn8Ax_JN4BBCCQnEy0oaoUmgctACRS3AyzY9DTyMCN40U6wG5wEktzJy__Uia9Lfmwdb1VXDw'),
('Bananas', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_Q33vOfM9iw_UQgjuOlXyWIMR5vsjPEOR0FN8W_iIaliQe_QRIdX46ys8dzk-SaXhivu88gs91b7nQzDQKpSgVqME910Y'),
('Granny Smith Apples', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRT7xjJgZWyAUyJiuLUWosCa8mwtihAUbPj6952xNkV_DCyIZYHvqdn-RUSoQqVkfh2vuckZc0eylGoDlbJI9J2mCnnrxRqd_vjEjddJWpku2ubLbNFJ7xo'),
('Oranges', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTwKCc5mJOhXnrIIyDV5hSJz2QolxwS4NdVaT3bAxUBoIiFrkTYqhl9NV-4Z3CxiFq5_P22kiDxdGo6-QGBsa-F9ClL3vW-GDRyYfX5rBSqg1ARAgMlNGpVXg' ),
('Corn', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR19akhkosfk-1XTHVU7ycnCbPl8KwwoRO2iouZJ773pGRTse0W-ALlxfet3vkRp1qDH1oK8z6HZQTr8NvBmWX5DX673thRYKb8ihfn4EHoBKupyY7HrVfGmA'),
('Onion', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQN8AeFxs-kKDKiZlDnBw6IPESQNRzoznOKrsy9c8WeRw3xlewVLvFNDzRG4RD3YNv5Bux_lNaAjGguQJDrApvOyb7ZoCpwjo6aQTK2U_AAsU3-Q2H0Qd-tdw'),
('Potatoes', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8xp4cj4tgqkJzLqTNVQiph5mPE6hkCCzCCZDGmB7Juw4MkK_4QvKXRuYxXFMQPsrprtj4MvliajDSWFUnjgR2-Ev7CprN3VCR8rx5nTuXP5jLQ1oEbSVTUA'),
('Broccoli', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQoJ9IplyjOvfDJ-r9wdfTzdfZrKLJtqvK-a42Vw9-BIrHgGb0PLG4-UKgttuUfzn1oRBKvCET-MJaQ_OOH9fFKmCafUw4elJ48ZEWffGP0w-anH790TXboTA'),
('Carrots', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQWdst_PgBBe1fcgswItpJSApSn78iReuy_Z49jl4cPYD_oeNQKcY1h4r42VDXt5GZxG8sLOoG4GzI-mc6VAwmIQaKZUxczfcTq8N3v4d5jmUCrvJH3af0wI28'),
('Cucumbers', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRI1-_0tvZJApzMTt2aY9neG7sPkmI2zUwBFomHaNjF6pNwHsd3UIfbGfjMqiHoeRvC4h2wejG6GFtz_FXW8347MnsyAV-ZjkijCueGAmivTpnfw7QXmPHf'),
('Tomatoes', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQL0CaeN9ZBu5SKIuDcocq852a40__haoGUabaJ9tWoTJtn8_sU8WJPM8k7wYElAoZpo8b508dZMChEQPiEliQujCcJUmO-dOeNgI44ocvj'),
('Ground Beef', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDT27AN4qkd7Vaq7vPjJgoEjpRN_JXD12Et_i8FlWvN3MCRxcorIq7NlE0yzhI4kCFugHvmldGfjsciHnbkjVHjn8jsxUEYrjn_kILq7WwvE9D_mL5ZJ8nY9Q'),
('Ground Turkey', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRJd7-4nAi4yM-3T9OK_WjbKRSLP3sTgvYnVEh_S7pzfA3wzma8Rw2BVqMBzF7TFj98or87wK5iuYKhkNttl1ssLEvaF6SoJl0MjmrEIDOpdZxy-0KY6nERJw'),
('Chicken Breast', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjRUCS3ZRPdW1vpcKDT_F5hlwZH7HAQjm22SeCUZiFsZ6EPADmmOKBEhFQgc3UVgJ8PmldDpBHBHB77Diqn4XcwW13L791iWtVV1DGQ8aY9-09COxcApUPGQ'),
('Whole Chicken', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTA48YjqYWK_cmhOuDEnRn_M8DzCglar10RZh5VlHV47AQlGiBel0hEhVelZnymEnJY63ni4hAiho98MLXZ6_wQIP3tNtHZVsLmRvVj1fTNBSpWTABeI8PQaw'),
('Chuck Roast', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRe5jBxcVM5QEg8ZQ3itBzfK-oHprJBnG3m0BGndEFATgsxW9tvfg_7FHgWBPLPskssMDBz0ACOO0DQH66HhFPbPcupZm6UyVJYxBMqaCLVY2pXTgDfVNhZeg'),
('Pork Chops', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRuEgs4l08UwSxHKLt3aGKju2NEDMZcroFFMg875tD1Nd-Ahk99YaDacUEQd-KiZP9UFQKU4EAbBmZMgcph0uIrzldu0M87zpyQnC4FUMdInxOuTL_pukTh'),
('Apple Juice','https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSj1pvHyQUMxC53X2BCr_GjC_DZ2Kg-Cud_erAhUXJSKgVWHBGtvFAnkfQcVqZY25lVUW2B_cjzh_odVTlM0v7xpyLzCc-hfQlAQVioLXofaZqF-vuHw5KQvQ'),
('Grape Juice', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRcXODaTi7SVW9MMgBDWXy5HuwNuMsEdqvaEXCjqmLXYNOGMRjVnkARhKqBVX2qWffBz5yZlRfwDmIEK1cWe7-G1Uw6lSr4Ix1mzQR6kl8'),
('Cranberry Juice', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTEmU1n3kpdBOtq13HEXRQggkLkr_Nw1v5719aifhFCVIWloyKbLhEkl_IqaYPvGR3IkV6dq0tpbUgGQWdSOiEU47pK-D_CGvlWPa0GTpY0qVPuwaNbJAYa'),
('Dr.Pepper Zero Sugar Soda', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOd3EFs8hs8BcPdoBchqMbbCoTn5MxdYPT_ddymdvwJ7NZzkuPDLMu1Gpld2q-QVMQSvqua8wUsb1268fOqWsMGXK-aeh2x3fXClIPO0P8O2rKoGJ-aMTK'),
('Coca-Cola', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTLfVj0LjTeKAPvmZ-U3azpVL6Rkxt4SDM-9lzr6IAxlkg8sbqqEx4lKGMUdqacuqvLvo1bVN184aWEr7fxNiqQuEXdxrPQtlFbJJtj08A_pAHaC9phBog9Cx4'),
('Coconut Water', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdzF_bZtcbmyJjKG18OXUuNDXGrF-lK9cjey-hV7eituLUQ2-0Zytwu5QdoMtTqIcFCosIZ5ZUm3wjFH53YMJIPtH-dMBsSiyRnbw89Fpf4IlBwVVGCpRseg'),
('Natural Spring Water', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSW-IN5SEVCP7a6ryUFfWk5RPlxZj-Cb5DcqMvH5f1SwTSOWhHTfv4kk7BYKX-iY6wJTlER1_j5iJeberarcyRA_NFbKToqvv62s-6q3jtEJZklHAs0G0wnFNQ'),
('Farfalle Pasta', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTa_pp43GHF2v3d0MZaicrX3y-CA2iFMzU7B3dOl8i9htp0J0viNjLQzvJEd_T6sgJ9sWNl0LzmlzD2QYciQZRk0JJTRJawcvInAvdbTHqsrSyn4chwK1W-'),
('Basmati Rice', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRckhS0d0u4nbpdVjn-ocGy5chgaCs9QqIx18yR0sJq-zxgUxGiNccjTpq0gprvlYhtGNygcNc2yc-BDvLA3KWaDrJovv5NAbdV5PRWQ-AcIpHbM5iqzZeDiw'),
('Jasmine Rice', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSgz_Fdd1ONqnAwiQtli6p37LSgyVXotSpDbND67oXZRMlgqs33P7zjO89xCarq2qU9pY8llTOyULfbHMqPt5NOCNzKVWf-UhNvOm1m02CwkqsoyZuC3nYVuA'),
('Sugar', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSlfRXFdMGtHjdZc1xzs5qPNSUueYOjdJRL1Td4grlxbimYSJztdlm_cMn0bqbXqYBLX6miUS6ze1NIyIw7S2AHDLpnqYdONfxbXY3kDvqFWcIftPzr9HIGHw'),
('Flour', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQC9zv25p27hnifpSJWhWKVYYSVaaFcLdwFwAgIo1rH0nHwm9LCY5AvycrWtEZmbgLnRlCUEQBbklFdM5lHav9JxTx7dF5BcCSI8t6BRyUQLszKSal0pbW'),
('Salt', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTsM-zP6ivWiy19MNxBgKDWtA4fjP03oSfBYShKJnZgy1DFq7jJQVYn_gJQLL6yYtdwLPu_-T5GDQerPlD_OVeNL2JeVbNHrjez7LTza6200r9XZmfRHcQm'),
('Pepper', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJmGxmWTCIkNQOc3ncWlR5WjCZgzRt9YiDpfVilUIM6nzhObnh5kTQhEO5jknIOwvW3-emm4xxFfMaBvcc-7NdbqY9c3bToqMBx8RuwbSdXo_tAd5xRylaaw'),
('Vegetable Oil', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRiyWafwuvrysJ8l-tM1ZMlGuRvFUGu_4KdYikGuQmoGvldxEGOBoO1JxHjxiyTR5b5RZQDzxhlEUGRPlT4bQAtSqAvQa9Vc2HsRsfu-T5w0eFjd1OYh3_m'),
('Vanilla Ice Cream', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpNlTUpRHN_eKmKlScnzJIfWtWT7ERm2RX8lnsANOqRsfPq4l6UEq3CBNxR73sfdAlWiJIoQwMHWRUu_9NS1mCZpM2D3j4S3n6f6KsSdfVrNJl3rFOGD4s'),
('Chocolate Ice Cream', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQHLK_qEj5MAOl0tpC-PVQQvPxWFCfH0Eco5n7euiAkCtbw1NWT93ByZPz536F4sn6hPCzgJ9yRqJ1lfK9Dj1q3d0Baf_KB2GYAvDEZ3PGZ'),
('Chicken Nuggets', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQrybC49stjZzBOB6HNTkSaFN3KUp2P1uDEz2nKxt4gnhkReLyMd2KONXNqaOYDKkqcO3uP2m2HAW0FNTPvtp1OQaRwwa3j3A_dyHwCxHg'),
('Waffles', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSPw1SqSX64voXO5bb4sL6Cm02MfZ2oynQkIZGwapbZCIWikKBsm5PVvRx6qK2DRk0f_kTUdvp4YaJoQrFgtmMq9UGM8D-JLH0qkSoc74iRkZAK8Iz0dSw4'),
('Tater Tots', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTm54N8ME0Lj4WmUhgdtdM7FaVqaYz4S8rJu651XVsqF9xkXFnLeHmzdvgMWQdQ5i3n_2FDLZOUAX6_KGCeHAJsyjVOvGtyaPddRW3LQvVF'),
('Pepperoni Pizza', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRIevHBqY5oKLfmBO_3N7Y6SPNQhdOwOOlie9rZLzs1LUn_QF87nG9MvJFq0Pf8qHz0rQgkF7n3h3Jckvq0qbZtXBfcn3qopzFqliukcKH0'),
('French Fries', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTq7KbkqpMd14E25CJzwL3kaMOdCiGYYlael8CzuaNQMs9fJijkNw56POFPb7w7uYz54Ysmsp-PyYeE-yLGZyBzpsYn8Ll_Wql6jM69giJgzaiyXSMNQxwx');

SELECT * FROM products;
SELECT * FROM pictures;
