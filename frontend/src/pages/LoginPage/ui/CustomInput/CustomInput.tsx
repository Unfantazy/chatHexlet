import { useController, Control, FieldValues, Path } from 'react-hook-form'
import classNames from 'classnames'
import cls from './CustomInput.module.scss'

interface CustomInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  rules?: object;
  placeholder?: string;
  type?: 'button' | 'text' | 'checkbox' | 'password';
  label?: string;
}

export const CustomInput = <T extends FieldValues>({
  name,
  control,
  rules,
  placeholder = '',
  type='text',
  label = '',
}: CustomInputProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    // defaultValue: '',
  });

  return (
    <div className={cls.customInput}>
      {label && <label className={cls.label} htmlFor={name}>{label}</label>}
      <input
        className={classNames(cls.input, {[cls.error]: !!error}) }
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        ref={ref}
        placeholder={placeholder}
        type={type}
      />
      {/*{error && <span className={cls.errorTooltip}>{error.message}</span>}*/}
    </div>
  )
}
