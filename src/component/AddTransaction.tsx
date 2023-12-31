import React, { useState } from "react";
import { Box, Button, Modal, SxProps } from "@mui/material";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Theme } from "@emotion/react";

const categories = ["Grocery", "Rent", "Food", "Miscellaneous"];
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
	const [isInvalidAmount, setIsInvalidAmount] = useState<boolean>(false);
	const [formValidated, setFormValidated] = useState<boolean>(true);

	const handleCategory = (event: any) => {
		setCategory(categories[parseInt(event.target.value)]);
	};

	const handleDescription = (event: any) => {
		setDescription(event.target.value);
	};

	const handleDate = (event: any) => {
		setDate(event.target.value);
	};

	const validateData = () => {
		if(categories.includes(category) && description.length > 0 && date && !isInvalidAmount) {
			return true;
		}else {
			return false;
		}
	}

	const handleAmount = (event: any) => {
		if(parseInt(event.target.value) <= 0) {
			setIsInvalidAmount(true);
			return;
		}
		setIsInvalidAmount(false);
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
		if(validateData()) {
			setFormValidated(true);
			props.setShowAddExpenseForm(false);
			props.setAllTransaction((prevState: []) => [...prevState, data]);
			props.setTotalExpense((prevState: number) => (prevState + amount));
		}else {
			setFormValidated(false);
		}
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
					error={isInvalidAmount}
					id="standard-number"
					label="Amount"
					type="number"
					InputLabelProps={{
						shrink: true,
					}}
					variant="standard"
					required
					onChange={handleAmount}
					helperText={isInvalidAmount && "Enter a valid amount"}
				/>
				<TextField
					type="date"
					defaultValue={new Date().toLocaleDateString()}
					onChange={handleDate}
					required
				/>
				<Box component="span" style={{color: "#d32f2f", fontSize: "0.75rem"}}>{!formValidated && 'Please enter proper data'}</Box>
				<Button variant="contained" type="submit">Add</Button>
			</Box>
		</Modal>
	);
};
