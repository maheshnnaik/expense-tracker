import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { CurrencyRupee } from "@mui/icons-material";

export const Home = (props: any) => {
	const [totalExpense, setTotalExpense] = useState(0);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar variant="dense">
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Manage your daily expenses
						</Typography>
					</Toolbar>
				</AppBar>
				<div style={{ width: "100%", display: "flex", justifyContent: "center", gap: "5px" }}>
					<Box
						component="div"
						sx={{
							display: "flex",
							gap: "10px",
							whiteSpace: "normal",
							justifyContent: "center",
							my: 2,
							p: 4,
							bgcolor: (theme) =>
								theme.palette.mode === "dark" ? "#101010" : "grey.100",
							color: (theme) =>
								theme.palette.mode === "dark" ? "grey.300" : "grey.800",
							border: "1px solid",
							borderColor: (theme) =>
								theme.palette.mode === "dark" ? "grey.800" : "grey.300",
							borderRadius: 2,
							fontSize: "0.875rem",
							fontWeight: "700",
						}}
					>
						<Typography variant="h6" component="div" sx={{display: "flex", alignItems: "center", flexWrap: "wrap"}}>
							Total Expense: 
							<CurrencyRupee />
							{totalExpense}
						</Typography>
						{/* Total Expense <span> <CurrencyRupee> 0dfgf</CurrencyRupee> {totalExpense} </span> */}
					</Box>
					<Button sx={{
						my: 5,
						p: 2
					}} variant="contained" size="medium" endIcon={<CurrencyRupee />} > 
						Add Expense 
					</Button>
				</div>
			</Box>
		</>
	);
};
