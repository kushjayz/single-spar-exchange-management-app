// @ts-ignore
import { login } from '@gtn/Authentication';

export default function Root(props) {
  function handleClick(event: any): void {
    console.log('Kushan');
    login('uder','pp')
  }

  return <section>
    {props.name} is mounted!
    <button onClick={handleClick}>
      </button></section>;
}
