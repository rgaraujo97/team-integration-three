import React from "react"
import cn from "classnames"
import styles from "./Button.module.css"
import CircularProgress, {circularProgressClasses} from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";

export const Button = (props) => {
    const { children, isLoading } = props

    return (
        <button {...props} className={cn([styles.primary, styles.defaultSize])}>
            <div className={styles.childrenContainer}>
                { isLoading && 
                <Box sx={{ position: "relative", padding: "4px 0", marginRight: "8px" }}>
                    <CircularProgress
                    variant="determinate"
                    sx={{
                    color: "#eee",
                    opacity: 0.2
                    }}
                    size={24}
                    thickness={4}
                    value={100}
                />
                <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    sx={{
                    color: "white",
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                    }}
                    size={24}
                    thickness={4}
                    />

                </Box>
                } 
                <span className={cn([styles.text])}>{ children }</span>
            </div>
        </button>
    )
}
