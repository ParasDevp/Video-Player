import { Button, Dialog } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ConfirmBox, CurrentText, DialogBodyText, DialogButton, DialogContentBox, DialogText } from './style';
import { DeleteForever } from '@mui/icons-material';

const Popup = ({ open, handleClose, onSaveClick, body, savePatient, textColor, bodyText, confirm, renamePlan, success, onCancelClick, btnLoading }) => {
    const { t } = useTranslation();
    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogContentBox sx={{ padding: '30px 30px 0 30px' }}>
                {savePatient &&
                    <CurrentText>
                        {renamePlan ? t("common.name-plan") : t("common.rename-plan")}
                    </CurrentText>
                }
                {confirm &&
                    <ConfirmBox>
                        <DeleteForever sx={{ fontSize: '70px' }} />
                        <CurrentText sx={{ color: textColor, marginTop: '10px', marginBottom: !body && '10px' }}>
                            {bodyText}
                        </CurrentText>
                    </ConfirmBox>
                }
                <DialogText
                    sx={success ? { color: '#1A782C' } : { color: '#DE1B19' }}
                    id="alert-dialog-description"
                >

                </DialogText>
                {body &&
                    <DialogBodyText sx={{ textAlign: 'center', width: '100%' }} id="alert-dialog-description">
                        {body}
                    </DialogBodyText>
                }

            </DialogContentBox>

            <DialogButton>
                {onCancelClick &&
                    <Button
                        variant="contained"
                        onClick={onCancelClick}

                    >
                        Cancel
                    </Button>
                }

                <Button
                    variant="contained"
                    onClick={onSaveClick}
                >
                    OK
                </Button>
            </DialogButton>
        </Dialog>
    )
}

export default Popup
