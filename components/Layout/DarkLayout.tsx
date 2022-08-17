import  { FC, PropsWithChildren } from 'react'

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: "#3f3f3f",
        padding: "10px",
        borderRadius: "10px",
    }}>
        <h3>Dark Layout</h3>

      <div>
        { children }
     </div>  
    </div>
  )
}
