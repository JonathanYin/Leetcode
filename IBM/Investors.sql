/*
Enter your query below.
Please append a semicolon ";" at the end of the query
*/
SELECT
    i.email,
    COUNT(*) AS bonds,
    MIN(p.interest_flow) AS min_interest_flow,
    MAX(p.interest_flow) AS max_interest_flow,
    ROUND(AVG(p.interest_flow), 2) AS avg_interest_flow
FROM
    investors i
JOIN
    portfolios p ON i.id = p.investor_id
GROUP BY
    i.id, i.email
HAVING
    SUM(p.interest_flow) > 500000
ORDER BY
    i.email;