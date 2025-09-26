import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Slide } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useCustomNavigation } from '../shared/hooks/services-hooks/useServicesNavigation';

const style = {
  position: 'absolute' as 'absolute',
  paddingLeft: '20px' as '20px',
  width: '60%' as '60%',
  top: '80px' as '80px',
  right: 0,
  border: '2px solid #fff' as '2px solid #fff',
  borderRight: 'none' as 'none',
  borderTopLeftRadius: '20px' as '20px',
  borderBottomLeftRadius: '20px' as '20px',
  background: '#000' as '#000',
  opacity: 0.9,
  p: 4,
};

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderBottom: `1px solid white`,
  background: 'rgba(0, 0, 0, 1)',
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />}
    {...props}
  />
))(({ theme }) => ({
  paddingLeft: 0,
  backgroundColor: 'rgba(0, 0, 0, 1)',
  flexDirection: 'row',
  border: 'none',
  '& span': {
    marginLeft: '0 !important',
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: `0 0 0 ${theme.spacing(2)}`,
}));

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | false>('');

  const handleNavigation = useCustomNavigation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      console.log(event);
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <nav className="fixed px-[var(--horizontal-padding)] w-full h-20 top-0 left-0 flex justify-between items-center bg-black z-2
                    md:bg-transparent">
      <a href="/">
        <img
          src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/3a102297-c7f1-4c13-82a7-84d2623d1b00/public"
          alt="Alerta lab logo png"
          className="w-[200px] cursor-pointer
                    sm:w-[280px]"
        />
      </a>
      <img
        src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/c184e61c-2329-4c66-c753-12d21a40f400/public"
        alt="Alerta lab logo png"
        className="cursor-pointer
                  sm:hidden"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus={true}
        BackdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, 0)' }
        }}
      >
      <Slide direction="left" in={open} mountOnEnter unmountOnExit>
        <div style={style}>
          <div className='py-3 border-b border-white'>
            <p 
              className='font-[Exan] text-white text-xl font-semibold'
              onClick={() => handleNavigation('/portfolio', () => handleClose())}
            >
              PORTFOLIO
            </p>
          </div>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <p className='text-white text-xl'>SERVICES</p>
            </AccordionSummary>
            <AccordionDetails>
              <div className='py-3 border-b border-white'>
                <p 
                  className='font-[Exan] text-white text-xl font-light'
                  onClick={() => handleNavigation('[codecrumb] NEW tech, new tricks_', () => handleClose())}
                >
                  WEB SERVICES
                </p>
              </div>
              <div className='py-3 border-b border-white'>
                <p 
                  className='font-[Exan] text-white text-xl font-semibold'
                  onClick={() => handleNavigation('[UPDATE BASE] App-building in zero-G_', () => handleClose())}
                >
                  APP DEVELOPMENT
                </p>
              </div>
              <div className='py-3 border-b border-white'>
                <p 
                  className='font-[Exan] text-white text-xl font-semibold'
                  onClick={() => handleNavigation('[UX-XPlOSION] COSMIC CLARITY IN PIXELS_', () => handleClose())}
                >
                  X DESIGN
                </p>
              </div>
              <div className='py-3 border-b border-white'>
                <p 
                  className='font-[Exan] text-white text-xl font-semibold'
                  onClick={() => handleNavigation('[FUTUREBIT] EXPERIMENTAL TECH, YET ESSENTIAL_', () => handleClose())}
                >
                  EMERGING TECH
                </p>
              </div>
              <div className='py-3'>
                <p 
                  className='font-[Exan] text-white text-xl font-semibold'
                  onClick={() => handleNavigation('[BRAND BOULDER] BUILT TO CARRY IDENTITIES_', () => handleClose())}
                >
                  WHITE LABEL
                </p>
              </div>
            </AccordionDetails>
          </Accordion>
          <div className='py-3 border-b border-white'>
            <p 
              className='font-[Exan] text-white text-xl font-bold'
              onClick={() => handleNavigation('/packages', () => handleClose())}
            >
              PACKAGES
            </p>
          </div>
          <div className='py-3 border-b border-white'>
            <p className='font-[Exan] text-white text-xl font-bold'>
              CONTACT
            </p>
          </div>
        </div>
      </Slide>
      </Modal>
    </nav>
  );
};

export default Navbar;
