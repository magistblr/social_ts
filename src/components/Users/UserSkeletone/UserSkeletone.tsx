import React from "react"
import ContentLoader from "react-content-loader"
import s from './UserSkeletone.module.css'

const MyLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={800}
    height={830}
    viewBox="0 0 800 830"
    backgroundColor="#dedede"
    foregroundColor="#5284c5"
    className={s.wrapper}
    {...props}
  >
    <circle cx="51" cy="66" r="48" /> 
    <rect x="17" y="130" rx="0" ry="0" width="70" height="29" /> 
    <rect x="119" y="26" rx="10" ry="10" width="471" height="65" /> 
    <circle cx="50" cy="228" r="48" /> 
    <rect x="16" y="292" rx="0" ry="0" width="70" height="29" /> 
    <rect x="118" y="188" rx="10" ry="10" width="471" height="65" /> 
    <circle cx="51" cy="391" r="48" /> 
    <rect x="17" y="455" rx="0" ry="0" width="70" height="29" /> 
    <rect x="119" y="351" rx="10" ry="10" width="471" height="65" /> 
    <circle cx="50" cy="553" r="48" /> 
    <rect x="16" y="617" rx="0" ry="0" width="70" height="29" /> 
    <rect x="118" y="513" rx="10" ry="10" width="471" height="65" /> 
    <circle cx="52" cy="719" r="48" /> 
    <rect x="18" y="783" rx="0" ry="0" width="70" height="29" /> 
    <rect x="120" y="679" rx="10" ry="10" width="471" height="65" />
  </ContentLoader>
)

export default MyLoader
