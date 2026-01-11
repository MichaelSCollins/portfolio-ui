"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
interface AlertDialogProps {
    id?: string;
    triggerLabel?: string;
    alertTitle?: string;
    alertContent?: string;
    aria?: {
        labelledby?: string;
        describedby?: string;
    };
    children?: React.ReactNode;
    buttonGroup: {
        primary: {
            label: string;
            // onClick: () => void;
            autoFocus?: boolean;
        };
        secondary?: {
            label: string;
            // onClick: () => void;
            autoFocus?: boolean;
        };
    };
}
export default function AlertDialog(props: AlertDialogProps) {
    const {
        id,
        triggerLabel,
        alertTitle,
        alertContent,
        aria,
        buttonGroup,
        children
    } = props;

    const { labelledby, describedby } = aria || {};
    const { primary, secondary } = buttonGroup;
    const { label: primaryLabel, autoFocus: primaryAutoFocus } = primary;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePrimary = () => {
        handleClose();
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen} >
                {children}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby={labelledby}
                aria-describedby={describedby}
            >
                <DialogTitle id={labelledby ?? 'alert-dialog-title'} >
                    {alertTitle}
                </DialogTitle>
                <DialogContent >
                    <DialogContentText id={describedby ?? 'alert-dialog-description'} >
                        {alertContent}
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    {secondary && (
                        <Button onClick={() => { handleClose(); }}>
                            {secondary.label}
                        </Button>
                    )}
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handlePrimary} autoFocus={primaryAutoFocus} >
                        {primaryLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}