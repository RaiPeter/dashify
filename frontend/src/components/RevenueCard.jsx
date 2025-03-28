import React from 'react'
import "./RevenueCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import { 
    faClipboard, 
    faFaceAngry, 
    faArrowTrendUp, 
    faArrowTrendDown, 
    faBuildingColumns,
    faWallet,
    faUsers} from "@fortawesome/free-solid-svg-icons";
import { faClipboard as farClipboard } from "@fortawesome/free-regular-svg-icons";


const RevenueCard = () => {
  return (
    <div className='revenue-card'>
      <div className='revenue-balance'>
        <p>My Balance</p>
      </div>
      <div className='revenue-amount'>
        <h3>$117,000.43</h3>
      </div>
      <div className='revenue-small-cards'>
        <div className='progress-card'>
            <div className='progress-card-icon'>
                <FontAwesomeIcon icon={faArrowTrendUp} />
            </div>
            <div className='progress-card-details'>
                <h4>$13,321.12</h4>
                <p>Income</p>
            </div>
        </div>
        <div className='progress-card'>
            <div className='progress-card-icon'>
                <FontAwesomeIcon icon={faArrowTrendDown} />
            </div>
            <div className='progress-card-details'>
                <h4>$13,321.12</h4>
                <p>Expense</p>
            </div>
        </div>
      </div>
      <div className="revenue-progress">
        <div className='revenue-progress-icon'>
            <FontAwesomeIcon icon={faBuildingColumns} />
        </div>
        <div className='revenue-progress-details'>
            <div className='revenue-progress-head'>
                <h4>Property</h4>
                <p>15.780</p>
            </div>
            <div className='revenue-progress-progressbar'>
                <progress id="file" value="72" max="100"> 72% </progress>
            </div>
            <div className='revenue-progress-update'>
               <p> 60% of Target</p>
            </div>
        </div>
      </div>
      <div className="revenue-progress">
        <div className='revenue-progress-icon'>
            <FontAwesomeIcon icon={faWallet} />
        </div>
        <div className='revenue-progress-details'>
            <div className='revenue-progress-head'>
                <h4>Revenue</h4>
                <p>$78.3M</p>
            </div>
            <div className='revenue-progress-progressbar'>
                <progress id="file" value="80" max="100"> 72% </progress>
            </div>
            <div className='revenue-progress-update'>
                <p>80% of Target</p>
            </div>
        </div>
      </div>
      <div className="revenue-progress">
        <div className='revenue-progress-icon'>
            <FontAwesomeIcon icon={faUsers} />
        </div>
        <div className='revenue-progress-details'>
            <div  className='revenue-progress-head'>
                <h4>Customer</h4>
                <p>9,154</p>
            </div>
            <div  className='revenue-progress-progressbar'>
                <progress id="file" value="40" max="100"> 72% </progress>
            </div>
            <div className='revenue-progress-update'>
                <p>40% of Target</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RevenueCard
