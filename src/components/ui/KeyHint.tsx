interface KeyHintProps {
  children: string
}

export function KeyHint({ children }: KeyHintProps) {
  return <kbd className="key-hint">{children}</kbd>
}
