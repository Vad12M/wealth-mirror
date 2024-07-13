import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";

export default function Custom404() {
  return (
    <section className="flex items-center">
      <div className="w-1/2">
        <Typography type={'heading1'} text="oops!"/>
        <Typography type={'heading1'} text="The Page you are looking for is not found.."/>
        <Button>
          {'Go Home'}
        </Button>
      </div>
      <div className="w-1/2">

      </div>
    </section>
  )
}
