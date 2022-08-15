import BackDrop from '../BackDrop'
import Card from '../Card/Card'
import './index.css'
const ConfirmModel = (props) => {
    return (
        <BackDrop>
            <Card className="confirmModel">
                <div className="confirmText">
                    <p>{props.confirmText}</p>
                </div>
                <div className="confirmBtn">
                    <button onClick={props.onOk}>确认</button>
                    <button onClick={props.onCancel}>取消</button>
                </div>
            </Card>
        </BackDrop>
    )
}

export default ConfirmModel
