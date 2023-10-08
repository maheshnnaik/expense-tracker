import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from "@mui/material"

interface TransactionHistoryProps {
	history: Array<{date: string, category: string, amount: number, description: string}>
}

const columns = ["No", "Date", "Type", "Amount", "Description"];

const StyledTabelCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	}
}));

const StyledTabelRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover
	},
	'&:last-child td, &:last-child th': {
		border: 0
	}
}));

export const TransactionHistory = (props: TransactionHistoryProps) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="Transaction History">
				<TableHead>
					<TableRow key="row">
						{
							columns.map((column) => <StyledTabelCell key={column} align="center">{column}</StyledTabelCell>)
						}
					</TableRow>
				</TableHead>
				<TableBody>
					{
						props.history.map((transaction, index) => (
							<StyledTabelRow key={index+1}>
								<StyledTabelCell key={index+1} align="center">{index + 1}</StyledTabelCell>
								<StyledTabelCell key={index+1} align="center">{transaction.date}</StyledTabelCell>
								<StyledTabelCell key={index+1} align="center">{transaction.category}</StyledTabelCell>
								<StyledTabelCell key={index+1} align="center">{transaction.amount}</StyledTabelCell>
								<StyledTabelCell key={index+1} align="center">{transaction.description}</StyledTabelCell>
							</StyledTabelRow>
						))
					}
				</TableBody>
			</Table>
		</TableContainer>
	)
}