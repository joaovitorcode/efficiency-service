interface CMSIconProps {
  icon: string
}

export function CMSIcon({ icon }: CMSIconProps) {
  return (
    <div
      className="text-5xl text-main"
      dangerouslySetInnerHTML={{
        __html: icon
      }}
    />
  )
}