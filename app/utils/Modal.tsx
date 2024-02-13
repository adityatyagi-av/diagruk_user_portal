import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


import React,{FC} from 'react'

type Props = {
    open:boolean;
    setOpen:(open:boolean)=>void;
    modalName:string;
    modalDesc:string;
    activeItem:any;
    component:any;
    setRoute?: (route:string)=>void;
}

const Modal:FC<Props>= ({open,setOpen,modalName,modalDesc,setRoute,component:Component}) => {
  return (
    <Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">{modalName}</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>{modalName}</DialogTitle>
      <DialogDescription>
        {modalDesc}
      </DialogDescription>
    </DialogHeader>
   <Component setOpen={setOpen} setRoute={setRoute}/>
  </DialogContent>
</Dialog>

  )
}

export default Modal