import Navigation from "@/components/navigation"

const layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default layout