import {
    Button,
    FormControl,
    Grid,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useStyles } from "./CurrencyConverter.style";
import arrowBtn from "../../assets/images/arrow-btn.png";
import icon from "../../assets/images/icon.png";

export const CurrencyConverter = () => {
    const classes = useStyles();

    const [fromCurrency, setFromCurrency] = React.useState("USD");
    const [toCurrency, setToCurrency] = React.useState("USD");
    const [amount, setAmount] = React.useState(1);
    const [resAmount, setResAmount] = React.useState(1);

    return (
        <Paper elevation={10} className={classes.paperCurrency}>
            <Grid container spacing={3}>
                {/* Amount */}
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        className={classes.textField}
                        id="standard-basic"
                        InputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            classes: {
                                input: classes.resize,
                            },
                        }}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        label="Amount"
                        variant="standard"
                        size="large"
                    />

                </Grid>

                {/* Dropdown of Currency */}
                <Grid item xs={12} sm={6} md={2}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            className={classes.select}
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                        >
                            <MenuItem value="IND">
                                <em>IND</em>
                            </MenuItem>
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"GBP"}>GBP</MenuItem>
                            <MenuItem value={"EUR"}>EUR</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                {/* Convert Btn */}
                <Grid item xs={12} sm={6} md={2}>
                    <Button className={classes.convertBtn}>
                        <img src={arrowBtn} alt="arrow" />
                    </Button>
                </Grid>

                {/* Dropdown of Currency */}
                <Grid item xs={12} sm={6} md={2}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            className={classes.select}
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                        >
                            <MenuItem value="IND">
                                <em>IND</em>
                            </MenuItem>
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"GBP"}>GBP</MenuItem>
                            <MenuItem value={"EUR"}>EUR</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                {/* Result Amount */}
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        className={classes.textField}
                        id="standard-basic"
                        InputProps={{
                            inputMode: "numeric",
                            pattern: "[0-9]*",
                            classes: {
                                input: classes.resize,
                            },
                        }}
                        value={resAmount}
                        label="Amount"
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.info}>
                <Grid item xs={12} sm={12} md={12}>
                    <img src={icon} alt="icon" className={classes.imgIcon} />
                    <Typography variant="span" className={classes.infoText}>
                        Conversion rate of : 1 USD =  75 INR
                    </Typography>
                </Grid>
            </Grid>

        </Paper>
    );
};
