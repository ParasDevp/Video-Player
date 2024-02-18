import { ModalForm, ModalPopup } from "./style"
import PropTypes from 'prop-types';

const Modal = ({ open, children, styles, className, ...rest }) => {
    return (
        <ModalPopup
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            open={open}
            {...rest}
        >
            <ModalForm className={`${className}`} style={styles}>
                {children}
            </ModalForm>
        </ModalPopup>
    )
}

Modal.propTypes = {
    open: PropTypes.bool,
    children: PropTypes.node,
    styles: PropTypes.any,
    className: PropTypes.string
}

export default Modal
