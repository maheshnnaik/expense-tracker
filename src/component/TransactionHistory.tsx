import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

interface TransactionHistoryProps {
	history: Array<{date: string, category: string, amount: number, description: string}>
}

const columns = ["No", "Date", "Type", "Amount", "Description"]
export const TransactionHistory = (props: TransactionHistoryProps) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="Transaction History">
				<TableHead>
					<TableRow>
						{
							columns.map((column) => <TableCell align="center">{column}</TableCell>)
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{
						props.history.map((transaction, index) => (
							<TableRow key={index+1}>
								<TableCell align="center">{index + 1}</TableCell>
								<TableCell align="center">{transaction.date}</TableCell>
								<TableCell align="center">{transaction.category}</TableCell>
								<TableCell align="center">{transaction.amount}</TableCell>
								<TableCell align="center">{transaction.description}</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</TableContainer>
	)
}