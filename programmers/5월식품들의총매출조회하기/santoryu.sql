SELECT 
    a.PRODUCT_ID,	
    PRODUCT_NAME,	
    sum(AMOUNT*PRICE) as TOTAL_SALES
from 
    FOOD_PRODUCT a 
join 
    FOOD_ORDER b on a.PRODUCT_ID=b.PRODUCT_ID
where 
    PRODUCE_DATE like '2022-05%'
group by PRODUCT_ID
order by TOTAL_SALES desc,a.PRODUCT_ID
