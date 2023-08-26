import React, { useState } from "react";
import { Box, Button, Modal, SxProps } from "@mui/material";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Theme } from "@emotion/react";

const categories = ["Grocery", "Rent", "Salary", "Tax", "Miscellaneous"];
interface AddTransactionProps {
	open: boolean;
	setShowAddExpenseForm: any;
	setAllTransaction: any;
	setTotalExpense: Function;
}

const modalStyle: SxProps<Theme> = {
	width: "40vw",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	left: "30vw",
};

export const AddTransaction = (props: AddTransactionProps) => {
	const [category, setCategory] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [amount, setAmount] = useState<number>(0);
	const [date, setDate] = useState<Date>();

	const handleCategory = (event: any) => {
		setCategory(categories[parseInt(event.target.value)]);
	};
	const handleDescription = (event: any) => {
		setDescription(event.target.value);
	};
	const handleDate = (event: any) => {
		setDate(event.target.value);
	};
	const handleAmount = (event: any) => {
		setAmount(parseInt(event.target.value));
	};
	const handleSubmit = (event: any) => {
		event.preventDefault();
		let data = {
			date,
			category,
			amount,
			description
		};
		props.setShowAddExpenseForm(false);
		props.setAllTransaction((prevState: []) => [...prevState, data]);
		props.setTotalExpense((prevState: number) => (prevState + amount));
	};

	return (
		<Modal
			open={props.open}
			onClose={() => {
				props.setShowAddExpenseForm(false);
			}}
			sx={modalStyle}
		>
			<Box
				component="form"
				sx={{
					"& .MuiTextField-root": { m: 3, width: "25ch" },
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					bgcolor: (theme) =>
						theme.palette.mode === "dark" ? "#101010" : "grey.100",
					color: (theme) =>
						theme.palette.mode === "dark" ? "grey.300" : "grey.800",
					border: "2px solid",
					borderColor: (theme) =>
						theme.palette.mode === "dark" ? "grey.800" : "grey.300",
				}}
				onSubmit={handleSubmit}
			>
				<TextField
					id="outlined"
					select
					label="Select"
					helperText="Please select the category"
					defaultValue={categories[0]}
					variant="standard"
					required
				>
					{categories.map((category, index) => {
						return (
							<MenuItem key={index} value={category} onClick={handleCategory}>
								{category}
							</MenuItem>
						);
					})}
				</TextField>
				<TextField
					id="standard-multiline-flexible"
					placeholder="Please enter a brief description"
					variant="standard"
					required
					onChange={handleDescription}
				/>
				<TextField
					id="standard-number"
					label="Amount"
					type="number"
					InputLabelProps={{
						shrink: true,
					}}
					variant="standard"
					required
					onChange={handleAmount}
				/>
				<TextField
					type="date"
					defaultValue={new Date().toLocaleDateString()}
					onChange={handleDate}
					required
				/>
				<Button variant="contained" type="submit">Add</Button>
			</Box>
		</Modal>
	);
};
