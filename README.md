In this project, let's build a **Cash Withdrawal** app.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cash-withdrawal-output-v2.gif" alt="cash withdrawal" style="max-width:90%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/cash-withdrawal-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/cash-withdrawal-lg-output-v2.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the balance should be **2000** rupees
- When a denomination is clicked, then the respective value should be deducted from the balance available
- The `CashWithdrawal` component receives the `denominationsList` as a prop. It consists of a list of denomination objects with the following properties in each denomination object

  |  Key  | Data Type |
  | :---: | :-------: |
  |  id   |  Number   |
  | value |  Number   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cash-withdrawal-component-structure-v2.png" alt="cash withdrawal component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/CashWithdrawal/index.js`
- `src/components/CashWithdrawal/index.css`
- `src/components/DenominationItem/index.js`
- `src/components/DenominationItem/index.css`
</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #150b3e ; width: 150px; padding: 10px; color: white">Hex: #150b3e</div>
<div style="background-color: #c7d2fe ; width: 150px; padding: 10px; color: black">Hex: #c7d2fe</div>
<div style="background-color: #7c3aed ; width: 150px; padding: 10px; color: white">Hex: #7c3aed</div>
<div style="background-color: #d4d2db ; width: 150px; padding: 10px; color: black">Hex: #d4d2db</div>
<div style="background-color: #585076 ; width: 150px; padding: 10px; color: white">Hex: #585076</div>
<div style="background-color: #382f5a ; width: 150px; padding: 10px; color: white">Hex: #382f5a</div>
<div style="background-color: #c4c4c4 ; width: 150px; padding: 10px; color: black">Hex: #c4c4c4</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
